class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description
      t.integer :time
      t.string :course
      t.string :cuisine
      t.integer :servings
      t.integer :user_id

      t.timestamps
    end
  end
end
