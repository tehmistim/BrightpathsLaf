# Summary
This will be for a recipe creating/sharing and grocery list app. This is plan will layout what tables are needed, what information they’ll store, and how the data will relate to each other.

# Features
- users can sign into the app with their email and password
- users can create recipes with ingredients and instructions
- recipes can be marked as public or private
- users can view other people’s recipes
- ingredients from recipes can be added to user’s grocery lists
- users can create their own occasions and assign recipes to occasions

# User Structure
- user_id 
- user_password
- user_login
- user_email
- user_photo
- user_register
- user_viewProfile
- user_editProfile
- user_viewMyRecipe (users own recipe catalog)
- user_viewRecipe (this is to view other users recipes)
- user_listRecipes
- user_createCategory
- user_createSubcategory
- user_selectCategory
- user_selectSubCategory
- user_createMyRecipe
- user_favoriteRecipe
- user_recipePrivate
- user_recipePublic
- user_searchRecipe
- user_deleteMyRecipe
- user_linkRecipeToOccasion
- user_unlinkRecipeToOccasion
- user_createShopping
- user_deleteShopping
- user_editShopping
- user_viewShopping
- user_saveShopping
- user_deleteMyRecipe
- user_rateRecipe
- user_deleteIngredient
- user_clearShopping
- user_planOccasion
- user_deleteOccasion
- user_editOccasion
- user_shareOccasion
- user_viewOccasion
- user_followUser
- user_unfollowUser
- user_favoriteUser
- user_ingredient
- user_edit
- user_submit

# Recipe
- viewRecipe
- listRecipe
- viewCatagory
- viewSubCatagory
- user_login
- viewIngredients
- user_rateRecipe
- user_shareRecipe
- suggestOccasion
- viewOccasion
- recipePhoto
- recipeRating

# Ingredients
- createIngredient
- viewIngredient
- viewCalorieCount
- listIngredients
- deleteIngredient
- deleteAllIngredients
- suggestIngredients
- makeIngredients
- ingredientPhoto
- ingredientRating

# Occasions
- user_createOccasion
- user_deleteOccasion
- viewOccasion
- user_viewOccasion
- user_inviteUser
- user_uninviteUser
- user_inviteGuests
- user_uninviteGuests
- shareOccasion
- user_setOccasionPublic
- user_setOccasionPrivate
- user_editOccasion

# Shopping List
- createShopping
- editShopping
- clearShopping
- viewShopping
- printShopping
- user_createShopping
- user_deleteShopping
- user_editShopping
- user_viewShopping
- user_clearShopping
- user_saveShopping
- user_printShopping

# Edit

- editRecipe
- editShopping
- editIngredient
- editUser
- edit

# Guest

- viewRecipe
- viewUser
- viewOccasion
- createShopping
- editShopping
- clearShopping
- printShopping
- viewIngredient
- viewOccasion
- shareOccasion
