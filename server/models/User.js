var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User',{
	label: '用户',
	singular:'用户',
	plural:'用户'
});

User.add({
	name: { type: Types.Name, required: true, index: true, label:"名称" },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true, label:"邮箱" },
	password: { type: Types.Password, initial: true, required: true, label:"密码" },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});



/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
