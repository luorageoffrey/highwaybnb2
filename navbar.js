let navbar = document.createElement("div")
navbar.innerHTML = "<div class=\"navbar\">\n" +
    "  <a href=\"index.html\" class=\"navbar-brand\">Highway BnB</a>\n" +
    "  <ul class=\"mx\">\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"add-listing.html\" class=\"nav-link nowrap\">Become a Host</a>\n" +
    "    </li>\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"highwaybnb.html.html\" class=\"nav-link nowrap\">Browse Listings</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <ul>\n" +
    "    <li class=\"nav-item\" id=\"login-btn\">\n" +
    "      <a href=\"login.html\" class=\"nav-link\" id='login-btn-a'>Login</a>\n" +
    "    </li>\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a href=\"signup.html\" class=\"nav-link\" id='signup-btn'>Sign Up</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>"

document.body.appendChild(navbar)

// comments by Geoffrey