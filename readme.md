# userSpy.js

A simple javascript library that tracks each field a user changes as they
fill out a form.

# Usage

Just drop the userSpy.js file on your server and include it into the form with
a tag like the following.

    <script src="userSpy.js"></script>
  
# Future

The script currently just logs data about all the users actions to the javascript
console (Chrome). In the future it will make ajax calls to your own API in
order to log the actions to a file or database.