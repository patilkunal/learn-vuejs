class User {
    id = -1;
    username;
    email;
    clientname;
    roles = [];;
    active = true;

    constructor(jsonstr) {
        if (!jsonstr) {
            return;
        }
        Object.assign(this, jsonstr);
        // if (this.roles && Array.isArray(this.roles)) {
        //     this.roles.forEach(role => {
        //         const userRole = new UserRole();
        //         Object.assign(userRole, role);
        //         this.roles.push(userRole);
        //     });
        // }
    }
}

class UserRole {
    constructor() {
        this.id = -1;
        this.username = null;
        this.rolename = null;
        this.active = true;
    }
}

export {User, UserRole};
