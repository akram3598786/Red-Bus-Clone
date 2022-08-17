

function navbar(){
    return `
    <div id="headerBlock">

    <article class="container">
      <nav class="leftNav">
        <section>
          <div class="logo">
            <a href="./index.html"><img src="https://st.redbus.in/Images/redrail/r_logo.png" alt=""></a>
          </div>
          <div class="leftmenu">
            <ul>
              <li><a href="./index.html">BUS TICKETS</a></li>
              <li>
                <a href="./index.html" id="ryd">rYde<sup>new</sup></a>
              </li>
              <li><a href="./index.html">redrail</a></li>
            
            </ul>
          </div>
        </section>
      </nav>
 
 
      <nav class="rightNav">
        <ul>
          <li><a href="#">Help</a></li>
          <li>
            <a href="#" id="dropup-menu-booking" >Manage booking
            <span><i class="fas fa-chevron-down"></i> </span> 
            </a>
            <div class="dropdown-menu-booking">
              <div class=="dropdown-menu_2">
              <a class="dropdown-item" href="#">Sign In First</a>
              </div>
            </div>
           
          </li>
          
          <li id="Signup">
            <a href="#" id="dropup-menu" >
              <span><i class="far fa-user-circle"></i></span>
              <span><i class="fas fa-chevron-down after_user_circle"></i></span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Sign In/Sign Up</a>  
            </div>
          </li>
        </ul>
      </nav>
    </article>
  </div>`
}

export default navbar;


