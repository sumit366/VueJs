<template>
  <div class="hello">
  <nav class="navbar navbar-default navbar-inverse" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" exact class="navbar-brand">Home</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link to="/contactus" exact>Contact Us</router-link></li>
          <li><router-link exact>About Us</router-link></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><router-link to="/action">Action</router-link></li>
              <li><a href="#">Another action</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><p class="navbar-text">Already have an account?</p></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span class="caret"></span></a>
        <ul id="login-dp" class="dropdown-menu">
          <li>
             <div class="row">
                <div class="col-md-12">
                  Login via
                  <div class="social-buttons">
                    <a href="#" class="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
                    <a href="#" class="btn btn-tw"><i class="fa fa-twitter"></i> Twitter</a>
                  </div>
                                  or
                   <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                      <div class="form-group">
                         <label class="sr-only" for="exampleInputEmail2">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email address" required>
                      </div>
                      <div class="form-group">
                         <label class="sr-only" for="exampleInputPassword2">Password</label>
                         <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required>
                                               <div class="help-block text-right"><a href="">Forget the password ?</a></div>
                      </div>
                      <div class="form-group">
                         <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                      </div>
                      <div class="checkbox">
                         <label>
                         <input type="checkbox"> keep me logged-in
                         </label>
                      </div>
                   </form>
                </div>
                <div class="bottom text-center">
                  New here ? <a href="#"><b>Join Us</b></a>
                </div>
             </div>
          </li>
        </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-dp{
  min-width: 250px;
  padding: 14px 14px 0;
  overflow:hidden;
  background-color:rgba(255,255,255,.8);
}
#login-dp .help-block{
  font-size:12px
}
#login-dp .bottom{
  background-color:rgba(255,255,255,.8);
  border-top:1px solid #ddd;
  clear:both;
  padding:14px;
}
#login-dp .social-buttons{
  margin:12px 0
}
#login-dp .social-buttons a{
  width: 49%;
}
#login-dp .form-group {
  margin-bottom: 10px;
}
.btn-fb{
  color: #fff;
  background-color:#3b5998;
}
.btn-fb:hover{
  color: #fff;
  background-color:#496ebc
}
.btn-tw{
  color: #fff;
  background-color:#55acee;
}
.btn-tw:hover{
  color: #fff;
  background-color:#59b5fa;
}
@media(max-width:768px){
  #login-dp{
      background-color: inherit;
      color: #fff;
  }
  #login-dp .bottom{
      background-color: inherit;
      border-top:0 none;
  }
}
.router-link-active{
  color: white;
}
</style>
