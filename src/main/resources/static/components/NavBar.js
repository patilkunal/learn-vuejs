export default {
  template: `
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Fixed navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/home">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/userlist">Users</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'singleblog', params: {'id': 1}}">Blogs ID 1</router-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>`

}
