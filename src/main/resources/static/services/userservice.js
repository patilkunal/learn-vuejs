import { User } from "/models/User.js";


let UserService = function(apiHost) {
    if (apiHost) {
        this.HOST = apiHost;
    }

    this.getUsers = async function() {
    try {
            const response = await fetch(`${this.HOST}/rest/users`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if(data && Array.isArray(data)) {
                console.log("UserService.getUsers: " + JSON.stringify(data));
                return data; //.map(user => new User(user));
            } else if (data && typeof data === 'object') {
                // If data is a single object, convert it to User instance
                return [new User(data)];  
            } 
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }   

    this.getUser = async function(username) {
        try {
            const response = await fetch(`${this.HOST}/rest/users/${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if(data && typeof data === 'object')    {
                return new User(data);
            } else {
                throw new Error('Invalid user data received');
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }

    this.getAllRoles = async function() {
        try {
            const response = await fetch(`${this.HOST}/rest/roles`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if(data && Array.isArray(data)) {
                return data; //.map(role => new UserRole(role));
            } else if (data && typeof data === 'object') {
                // If data is a single object, convert it to UserRole instance
                return [new UserRole(data)];
            } 
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }

    this.updateUser = async function(username, userData) {
        try {
                const response = await fetch(`${this.HOST}/rest/users/${username}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
                throw error;
        }
    }

    this.createUser = async function(userData) {
        try {
            const response = await fetch(`${this.HOST}/rest/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return new User(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            throw error;
        }
    }

}


UserService.getUserRoles = async function(username) {
  try {
        const response = await fetch(`${this.HOST}/rest/userroles/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let roles = [];
        if(data && Array.isArray(data)) {
            data.forEach(role => {
                const userRole = new UserRole();
                Object.assign(userRole, role);
                roles.push(userRole);
            });
        } else if (data && typeof data === 'object') {
            // If data is a single object, convert it to UserRole instance
            roles.push(new UserRole(data));
        }
        return roles;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}




export default UserService;
