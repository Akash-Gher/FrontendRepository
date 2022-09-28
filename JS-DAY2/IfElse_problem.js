

// Eg: Tech Academy  role-based access to course content
// 	Master – view/add/delete/create/update content
// 	Admin – view/create
// 	User – view/edit


var role = "user";

if (role == "master") {
    console.log(" you can perform view/add/delete/create/update to courcecontent");
}

else if (role == "Admin") {
    console.log(" you can perform view/create to cource content");
}

else {
    console.log(" you can  view/edit to cource content");
}
