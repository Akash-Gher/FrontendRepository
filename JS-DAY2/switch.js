
// Eg: Tech Academy  role-based access to course content
// 	Master – view/add/delete/create/update content
// 	Admin – view/create
// 	User – view/edit


var role = "Admin";

switch (role) {
    case "Master":
        console.log(" you can perform view/add/delete/create/update to courcecontent");
        break;

    case "Admin":
        console.log(" you can perform view/create to cource content");
        break;


    default: console.log(" you can  view/edit to cource content");
        break;
}