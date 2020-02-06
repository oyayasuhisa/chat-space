# README

##**DB設計**
**usersテーブル**


|Column|type|Option|
|------|----|------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false, unipue: true|

###Association

- has_many :groups, through: :group_users
- has_many :groups_users
- has_many :messages

##**messageテーブル**

|Column|type|Option|
|------|----|------|
|body|text|
|image|string|	
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

###Association

- belongs_to :user
- belongs_to :group

##**groupsテーブル**

|Column|type|Option|
|------|----|------|
|name|string|null: false, unipue: true|

###Association

- has_many :users, through: :group_users
- has_many :groups_users
- has_many :messages

##**groups_usersテーブル**

|Column|type|Option|
|------|----|------|
|group_id|integer|foreign_key: true, null: false|
|user_id|integer|foreign_key: true, null: false|

###Association

- belongs_to :group
- belongs_to :user
