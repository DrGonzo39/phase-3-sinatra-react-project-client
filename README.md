#Welcome to my Bike Store frontend!

#Main features

-The most important thing for this repo is of course how the backend relationship is reflected on the client side frontend.
-Here you'll see that I've got the corresponding CRUD actions for both users and bikes in the appropriate format
-the bikes table is the child, and I did the full CRUD action for that. So, you'll see that I used the appropriate nested state conventions,
    meaining that the create, update, and delete actions for bikes are connected to the user they belong to both in state and on the backend. 

#Other notes

-'Buying' a bike from my website deletes it from the database, I figured this was the best way to create the delete action. Similar to buy now on a site
    like ebay.
-'Bidding' on a bike updates it's price since the highest bid gets the bike, thought that was the best way to update, hope both are okay they should meet
    the requirements!
