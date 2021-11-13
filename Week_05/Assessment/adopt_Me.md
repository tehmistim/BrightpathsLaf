# adoptMe Mission
Where rescuing, care and re-homing pets leads to great companionship.

# Summary/Features
Applicants will be able to apply for available pets that are ready to adopt out.  Data on Alumni will be kept, updated and stored.  An admin portal will manage applicants, pets and staff.  Exporting of current rescue data will be possible to other platforms.

# Structure
Rescue
- pet_ID (integer)
- pet_name (varchar)
- pet_color (varchar)
- pet_species (varchar)
- pet_breed (varchar)
- pet_shelterCode (integer)
- pet_dateOfBirth (timestamp)
- pet_age (integer)
- pet_status (varchar)
- pet_sex (varchar)
- pet_chipped(bool)
- pet_chipID (varchar)
- pet_neutered (bool)
- pet_neuteredDate (timestamp)
- pet_comments (varchar)

Adoption
- adoption_ID (integer)
- pet_ID (integer)
- owner_ID (integer)
- adopted_date (timestamp)
- return_date (timestamp)
- return_reason (varchar)
- adoption_comments (varchar)
- adoptedOut_by (varchar)
- intake_date (timestamp)

Species
- cat (varchar)
- dog (varchar)
- hamster (varchar)
- horse (varchar)
- pig (varchar)
- bird (varchar)
- reptile (varchar)
- farmAnimal (varchar)

Owner
- owner_title (varchar)
- owner_initials (varchar)
- owner_firstName (varchar)
- owner_lastName (varchar)
- owner_address (varchar)
- owner_city (varchar)
- owner_state (varchar)
- owner_zipcode (varchar)
- owner_primaryNumber (varchar)
- owner_secondNumber (varchar)
- owner_email (varchar)
- owner_comments (varchar)

Media
- media_name (varchar)
- media_notes (varchar)
- app_photo (varchar)
- main_photo (varchar)
- second_photo (varchar)
- third_photo (varchar)
- adoption_photo (varchar)
- admin_photo (varchar)
- intake_photo (varchar)
- date_uploaded (timestamp)

ADMIN
- create_media (bit)
- edit_media (bit)
- delete_media (bit)
- create_owner (bit)
- edit_owner (bit)
- delete_owner (bit)
- create_adoption (bit)
- edit_adoption (bit)
- delete_adoption (bit)
- create_rescue (bit)
- edit_rescue (bit)
- delete_rescue (bit)
- create_admin (bit)
- admin_ID (integer)
- edit_admin (bit)
- delete_admin (bit)
- admin_name (varchar)
- admin_email (varchar)
- admin_userName (varchar)
- admin_password (varchar)
- admin_number (varchar)
