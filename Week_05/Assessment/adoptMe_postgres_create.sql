CREATE TABLE "public.Rescue" (
	"ID" serial NOT NULL,
	"pet_ID" serial NOT NULL,
	"pet_name" serial(255) NOT NULL,
	"pet_color" serial(255) NOT NULL,
	"pet_species" serial(255) NOT NULL,
	"pet_breed" serial(255) NOT NULL,
	"pet_shelterCode" serial(255) NOT NULL,
	"pet_dateOfBirth" serial(255) NOT NULL,
	"pet_age" serial(255) NOT NULL,
	"pet_status" serial(255) NOT NULL,
	"pet_sex" serial(255) NOT NULL,
	"pet_chipped" serial(255) NOT NULL,
	"pet_chipID" serial(255) NOT NULL,
	"pet_neutered" serial(255) NOT NULL,
	"pet_neuteredDate" serial(255) NOT NULL,
	"pet_comments" serial(255) NOT NULL,
	"pet_photo" serial(255) NOT NULL,
	CONSTRAINT "Rescue_pk" PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Adoption" (
	"adoption_ID" serial NOT NULL,
	"pet_ID" serial NOT NULL,
	"owner_ID" integer NOT NULL,
	"adopted_date" TIMESTAMP NOT NULL,
	"return_date" TIMESTAMP NOT NULL,
	"adoption_comments" varchar(255) NOT NULL,
	"adoptedOut_by" varchar(255) NOT NULL,
	"intake_date" TIMESTAMP(255) NOT NULL,
	"adoption_photo" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Species" (
	"cat" varchar(255) NOT NULL,
	"dog" varchar(255) NOT NULL,
	"hamster" varchar(255) NOT NULL,
	"horse" varchar(255) NOT NULL,
	"pig" varchar(255) NOT NULL,
	"bird" varchar(255) NOT NULL,
	"reptile" varchar(255) NOT NULL,
	"farmAnimal" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Owner" (
	"owner_ID" serial NOT NULL,
	"owner_title" varchar(255) NOT NULL,
	"owner_firstName" varchar(255) NOT NULL,
	"owner_lastName" varchar(255) NOT NULL,
	"owner_address" varchar(255) NOT NULL,
	"owner_city" varchar(255) NOT NULL,
	"owner_state" varchar(255) NOT NULL,
	"owner_zipcode" integer(255) NOT NULL,
	"owner_primaryNumber" varchar(255) NOT NULL,
	"owner_secondNumber" varchar(255) NOT NULL,
	"owner_email" varchar(255) NOT NULL,
	"owner_comments" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Media" (
	"media_ID" varchar(255) NOT NULL,
	"media_name" varchar(255) NOT NULL,
	"media_notes" varchar(255) NOT NULL,
	"app_photo" varchar(255) NOT NULL,
	"main_photo" varchar(255) NOT NULL,
	"second_photo" varchar(255) NOT NULL,
	"third_photo" varchar(255) NOT NULL,
	"adoption_photo" varchar(255) NOT NULL,
	"admin_photo" varchar(255) NOT NULL,
	"intake_photo" varchar(255) NOT NULL,
	"date_uploaded" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.ADMIN" (
	"admin_ID" bit NOT NULL,
	"create_media" bit NOT NULL,
	"edit_media" bit varying NOT NULL,
	"delete_media" bit varying NOT NULL,
	"create_owner" bit varying NOT NULL,
	"edit_owner" bit varying NOT NULL,
	"delete_owner" bit varying NOT NULL,
	"create_adoption" bit varying NOT NULL,
	"edit_adoption" bit varying NOT NULL,
	"delete_adoption" bit varying NOT NULL,
	"create_rescue" bit varying NOT NULL,
	"edit_rescue" bit varying NOT NULL,
	"delete_rescue" bit varying NOT NULL,
	"create_admin" varchar(255) NOT NULL,
	"edit_admin" varchar(255) NOT NULL,
	"delete_admin" bit varying(255) NOT NULL,
	"admin_name" varchar(255) NOT NULL,
	"admin_email" varchar(255) NOT NULL,
	"admin_userName" varchar(255) NOT NULL,
	"admin_password" varchar(255) NOT NULL,
	"admin_number" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_fk0" FOREIGN KEY ("adoption_ID") REFERENCES "Rescue"("pet_ID");
ALTER TABLE "Adoption" ADD CONSTRAINT "Adoption_fk1" FOREIGN KEY ("pet_ID") REFERENCES "Rescue"("pet_ID");

ALTER TABLE "Species" ADD CONSTRAINT "Species_fk0" FOREIGN KEY ("cat") REFERENCES "Rescue"("pet_species");

ALTER TABLE "Owner" ADD CONSTRAINT "Owner_fk0" FOREIGN KEY ("owner_ID") REFERENCES "Adoption"("owner_ID");

ALTER TABLE "Media" ADD CONSTRAINT "Media_fk0" FOREIGN KEY ("main_photo") REFERENCES "Rescue"("pet_photo");
ALTER TABLE "Media" ADD CONSTRAINT "Media_fk1" FOREIGN KEY ("second_photo") REFERENCES "Rescue"("pet_photo");
ALTER TABLE "Media" ADD CONSTRAINT "Media_fk2" FOREIGN KEY ("third_photo") REFERENCES "Rescue"("pet_photo");
ALTER TABLE "Media" ADD CONSTRAINT "Media_fk3" FOREIGN KEY ("adoption_photo") REFERENCES "Adoption"("adoption_photo");
ALTER TABLE "Media" ADD CONSTRAINT "Media_fk4" FOREIGN KEY ("intake_photo") REFERENCES "Rescue"("pet_photo");

ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk0" FOREIGN KEY ("create_media") REFERENCES "Media"("media_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk1" FOREIGN KEY ("edit_media") REFERENCES "Media"("media_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk2" FOREIGN KEY ("delete_media") REFERENCES "Media"("media_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk3" FOREIGN KEY ("create_owner") REFERENCES "Owner"("owner_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk4" FOREIGN KEY ("edit_owner") REFERENCES "Owner"("owner_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk5" FOREIGN KEY ("delete_owner") REFERENCES "Owner"("owner_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk6" FOREIGN KEY ("create_adoption") REFERENCES "Adoption"("adoption_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk7" FOREIGN KEY ("edit_adoption") REFERENCES "Adoption"("adoption_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk8" FOREIGN KEY ("delete_adoption") REFERENCES "Adoption"("adoption_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk9" FOREIGN KEY ("create_rescue") REFERENCES "Rescue"("pet_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk10" FOREIGN KEY ("edit_rescue") REFERENCES "Rescue"("pet_ID");
ALTER TABLE "ADMIN" ADD CONSTRAINT "ADMIN_fk11" FOREIGN KEY ("delete_rescue") REFERENCES "Rescue"("pet_ID");







