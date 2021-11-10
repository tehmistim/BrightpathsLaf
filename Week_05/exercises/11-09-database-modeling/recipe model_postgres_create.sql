CREATE TABLE "public.user" (
	"user_id" serial(255) NOT NULL UNIQUE,
	"user_password" character varying(255) NOT NULL UNIQUE,
	"user_login" character varying(255) NOT NULL UNIQUE,
	"user_email" varchar(255) NOT NULL UNIQUE,
	"user_photo" TEXT(255) NOT NULL UNIQUE,
	"user_register" BOOLEAN(255) NOT NULL UNIQUE,
	"user_viewProfile" bit(255) NOT NULL UNIQUE,
	"user_editProfile" varchar(255) NOT NULL UNIQUE,
	"user_viewMyRecipe" bit(255) NOT NULL UNIQUE,
	"user_viewRecipe" bit(255) NOT NULL UNIQUE,
	"user_listRecipes" bit(255) NOT NULL UNIQUE,
	"user_createCatagory" varchar(255) NOT NULL UNIQUE,
	"user_createSubCategory" varchar(255) NOT NULL UNIQUE,
	"user_selectCategory" varchar(255) NOT NULL UNIQUE,
	"user_selectSubCategory" varchar(255) NOT NULL UNIQUE,
	"user_createMyRecipe" varchar(255) NOT NULL UNIQUE,
	"user_favoriteRecipe" varchar(255) NOT NULL UNIQUE,
	"user_recipePrivate" BOOLEAN(255) NOT NULL UNIQUE,
	"user_recipePublic" BOOLEAN(255) NOT NULL UNIQUE,
	"user_searchRecipe" varchar(255) NOT NULL UNIQUE,
	"user_deleteMyRecipe" bit(255) NOT NULL,
	"user_linkRecipetoOccasion" bit(255) NOT NULL,
	"user_unlikeRecipetoOccasion" bit(255) NOT NULL,
	"user_createShopping" varchar(255) NOT NULL,
	"user_deleteShopping" bit(255) NOT NULL,
	"user_editShopping" varchar(255) NOT NULL,
	"user_viewShopping" bit(255) NOT NULL,
	"user_saveShopping" bit(255) NOT NULL,
	"user_deleteMyRecipe" bit(255) NOT NULL,
	"user_rateRecipe" bit(255) NOT NULL,
	"user_deleteIngredient" bit(255) NOT NULL,
	"user_clearshopping" bit(255) NOT NULL,
	"user_planOccasion" varchar(255) NOT NULL,
	"user_deleteOccasion" bit(255) NOT NULL,
	"user_editOccasion" varchar(255) NOT NULL,
	"user_shareOccasion" varchar(255) NOT NULL,
	"user_viewOccasion" bit(255) NOT NULL,
	"user_followUser" bit(255) NOT NULL,
	"user_unfollowUser" bit(255) NOT NULL,
	"user_favoriteUser" bit(255) NOT NULL,
	"user_ingredient" bit(255) NOT NULL,
	"user_edit" bit(255) NOT NULL,
	"user_submit" bit(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Recipe" (
	"viewRecipe" bit NOT NULL,
	"listRecipe" bit NOT NULL,
	"viewCategory" bit NOT NULL,
	"viewSubCategory" bit NOT NULL,
	"user_login" bit NOT NULL,
	"viewIngredients" bit NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_fk0" FOREIGN KEY ("viewRecipe") REFERENCES "user"("user_id");



