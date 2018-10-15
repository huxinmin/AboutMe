$(document).ready(function() {
  //lazyload
  $("img.lazyload").lazyload();
  var header = $("#header"),
    nav = $("#nav"),
    backTop = $("#back-to-top");
  // --------------------
  //搜索
  $(".search-btn").on("click", function(event) {
    event.preventDefault();
    var val = $("#search").val();
    if (!!!val) {
      modalAlert('danger','对不起,搜索条件不能为空');
      return
    }
    window.location.href = "/search/" + val+".html"
  });
  // --------------------
  //只有页面向下滚动了header高度的时候，才出现向上按钮
  //往下滚动的时候，导航条固定在顶部
  backTop.on("click", function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 'fast');
  });

  var header_h = header.innerHeight();
  $(window).scroll(function() {
    if ($(window).scrollTop() > header_h) {
      backTop.fadeIn();
      nav.css({
        "position": "fixed",
        "left": "0",
        "top": "0"
      });

    } else {
      backTop.fadeOut();
      nav.css({
        "position": "static"
      });

    }
  });
  // --------------------
  //复制内容时加上版权信息
  function addLink() {
    var body_element = document.body;
    var selection = window.getSelection();
    var copytext;
    var pagelink = "\r\n\r\n 原文出自[胡新敏的个人博客] 转载请保留原文链接: " + window.location.href + "\r\n\r\n";
    if (window.clipboardData) { // Internet Explorer
      copytext = pagelink + selection + pagelink;
      window.clipboardData.setData("Text", copytext);
      return false;
    } else {
      copytext = pagelink + selection + pagelink;
      var newdiv = document.createElement('div');
      newdiv.style.position = 'absolute';
      newdiv.style.left = '-99999px';
      body_element.appendChild(newdiv);
      newdiv.innerHTML = copytext;
      selection.selectAllChildren(newdiv);
      window.setTimeout(function() {
        body_element.removeChild(newdiv);
      }, 0);
    }
  }
  document.oncopy = addLink;
  // --------------------
  //过滤脏话和敏感字
  function filter() {
    var isValid = true;
    var inputContent = $("#message-textarea").val();
    var arrMg = ["fuck", "tmd", "他妈的", "傻逼", "脑残", "shabi", "尼玛", 'nima','sb'];
    for (var i = 0; i < arrMg.length; i++) {
      var r = new RegExp(arrMg[i], "ig");
      if (r.test(inputContent)) {
        isValid = false;
        break
      }
    }
    return isValid
  }
  //提交评论时,先ajax去后台获取是否验证码正确,正确才进行提交表单,不正确就提示信息
  $("#submit-message").on('click', function() {
    if (!filter()) {
      modalAlert('danger','对不起,您的评论中含有不文明或者敏感的词汇,请修改后再发表');
    } else {
      console.log(window.location.host+'/addcomments')
      $.ajax({
        url:window.location.origin+'/addcomments.html',
        type:'POST',
        data:{"checkCaptcha":true,'captcha':$("#captcha").val()}
      }).done(function(data){
        if(data.captchaIsRight){
          //验证码正确
          $("#comments-form").submit();
        }else{
          //验证码错误
          modalAlert('danger','验证码错误或已经过期');
        }
      }).fail(function(err){
        console.log(err)
      });
    }
  });
  // --------------------
  //分页
  var nextPageBtn = $(".next-page");
  var currentPage = 1;
  nextPageBtn.on("click", function() {
    $.ajax({
      url: window.location.href + "?page=" + (currentPage + 1),
      type: "GET",
      dataType: "json"
    }).done(function(data) {
      console.log(data)
      currentPage++;
      if(currentPage>=data.totalPages){
          nextPageBtn.hide();
      }
      upDateNextPagePosts(data.results);
      // if (data.length) {
      //   currentPage++
      //   //更新dom
      //   upDateNextPagePosts(data.results);
      // } else {
      //   modalAlert('danger','对不起,没有更多数据了');
      //   nextPageBtn.hide();
      // }
    }).fail(function(err) {
      console.log(err)
    });
  });

  function upDateNextPagePosts(data) {
    var postGroup = $(".posts-group");
    data.forEach(function(item, index) {
      var imgSrc = !!item.pic && !!item.pic.filename ? "/upload/post/pics/" + item.pic.filename : "/images/default.jpg";
      var tagsHtml = "";
      item.tags.forEach(function(tmp) {
        tagsHtml = tagsHtml + "<a href='/tag/" + tmp._id+"'" + " target='_blank'>" + tmp.name + "</a>"
      });
      var time = item.time ? item.time.substring(0, 10) : '1991-08-05';
      var strHtml = "<article class='post-item media'>" +
        "<div class='media-left'>" +
        "<a href='/home/" + item._id +".html'" +  " target='_blank'>" +
        "<img src=" + imgSrc + ">" +
        "</a>" +
        "</div>" +
        "<div class='media-right'>" +
        "<a href='/home/" + item._id + ".html'" + " target='_blank'>" +
        "<h4 class='media-heading'>" + item.name + "</h4>" +
        "</a>" +
        "<h5 class='media-tags'>" + tagsHtml + "</h5>" +
        "<p class='media-intro'>" +
        "<a href='/home/" + item._id +".html'" +  " target='_blank'>" + item.intro + "</a></p>" +
        "<div class='media-right-footer'>" +
        "<span class='post-time'>" +
        "<i class='glyphicon glyphicon-time'></i>" + time + "</span>" +
        "<span class='post-comments'><i class='glyphicon glyphicon-comment'></i>" + item.comments + "</span>" +
        "<span class='post-views'><i class='glyphicon glyphicon-eye-open'></i>" + item.views + "</span>" +
        "</div>" +
        "</div>" +
        "</article>"
      postGroup.append(strHtml);
    });
    //将下一页的按钮移动到最下面
    postGroup.append(nextPageBtn);
  }
  // --------------------
  //对modal的进一步封装
  function modalAlert(status, words){
    if(!!!$("#modal")[0]){
      var modalhtml = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" style="display: none;">'+
                      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">×</span></button>'+
          '<div class="modal-title alert alert-'+status+'" role="alert">'+
            words+'</div></div></div></div>'
      $('body').append(modalhtml);
    }else{
      $(".modal-title").html(words);
      $(".modal-title").attr("class","modal-title alert alert-"+status);
    }
    $("#modal").modal();
  }
  //加载下一页评论
  var nextCommentsBtn =$(".next-comments-page");
  var currentCommentsPage = 1;
  nextCommentsBtn.on("click", function() {
    $.ajax({
      url: window.location.href + "?page=" + (currentCommentsPage + 1),
      type: "GET",
      dataType: "json"
    }).done(function(data) {
      console.log(data)
      if (data.length) {
        currentCommentsPage++
        //更新评论dom
        upDateNextPageComments(data);
      } else {
        modalAlert('danger','对不起,没有更多评论了');
        nextCommentsBtn.hide();
      }
    }).fail(function(err) {
      console.log(err)
    });
  });
  function upDateNextPageComments(comments){
    var commentsGroup = $(".post-comments-group");
    comments.forEach(function(item){
      var time = item.time ? item.time.substring(0, 10) : '1991-08-05';
      var strHtml = '<div class="list-item">'+
                  '<div class="comment-username">'+item.name.first+
                  '<span>'+time+'</span></div>'+
                  '<div class="comment-message">'+item.message+'</div>'+
                '</div>'
      commentsGroup.append(strHtml);
    });
    //将下一页的按钮移动到最下面
    commentsGroup.append(nextCommentsBtn);
  }
});