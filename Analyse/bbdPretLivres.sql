#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Biblio
#------------------------------------------------------------

CREATE TABLE Biblio(
        code    Int  Auto_increment  NOT NULL ,
        nom     Varchar (150) ,
        tel     Varchar (15) ,
        fax     Varchar (15) ,
        email   Varchar (150) ,
        contact Varchar (150)
	,CONSTRAINT Biblio_PK PRIMARY KEY (code)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Livres
#------------------------------------------------------------

CREATE TABLE Livres(
        code          Int  Auto_increment  NOT NULL ,
        titre         Varchar (150) ,
        issn          Varchar (9) ,
        isbn          Varchar (15) ,
        edition       Varchar (150) ,
        genres        Varchar (150) ,
        synopsis      Varchar (150) ,
        date_parution Date
	,CONSTRAINT Livres_PK PRIMARY KEY (code)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Roles
#------------------------------------------------------------

CREATE TABLE Roles(
        Code Int  Auto_increment  NOT NULL ,
        type Varchar (150)
	,CONSTRAINT Roles_PK PRIMARY KEY (Code)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Personnes
#------------------------------------------------------------

CREATE TABLE Personnes(
        code           Int  Auto_increment  NOT NULL ,
        nom            Varchar (150) ,
        prenom         Varchar (150) ,
        date_naissance Datetime ,
        date_deces     Datetime ,
        tel            Varchar (15) ,
        email          Varchar (150) ,
        trigramme      Varchar (5) ,
        Code_Roles     Int NOT NULL
	,CONSTRAINT Personnes_PK PRIMARY KEY (code)

	,CONSTRAINT Personnes_Roles_FK FOREIGN KEY (Code_Roles) REFERENCES Roles(Code)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Retrait
#------------------------------------------------------------

CREATE TABLE Retrait(
        code           Int NOT NULL ,
        code_Personnes Int NOT NULL ,
        code_Livres    Int NOT NULL ,
        date_retrait   Date ,
        date_retour    Date
	,CONSTRAINT Retrait_PK PRIMARY KEY (code,code_Personnes,code_Livres)

	,CONSTRAINT Retrait_Biblio_FK FOREIGN KEY (code) REFERENCES Biblio(code)
	,CONSTRAINT Retrait_Personnes0_FK FOREIGN KEY (code_Personnes) REFERENCES Personnes(code)
	,CONSTRAINT Retrait_Livres1_FK FOREIGN KEY (code_Livres) REFERENCES Livres(code)
)ENGINE=InnoDB;

