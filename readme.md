# userSpy.js

A simple javascript library that tracks each field a user changes as they
fill out a form.

# Usage

Just drop the userSpy.js file on your server and include it into the form with
a tag like the following.

    <script src="userSpy.js"></script>
  
# User Generated ID

In many cases, you'll already know something about the form you're generating.
Such as a user ID. In those cases you can create your own Javascript function
called spyGenerateUser(). The result of that function will automatically be
appended to the data that is captured with each request.

    function spyGenerateUser() {
        return $('#userId').value;
    }

# Future

The script currently just logs data about all the users actions to the javascript
console (Chrome). In the future it will make ajax calls to your own API in
order to log the actions to a file or database.