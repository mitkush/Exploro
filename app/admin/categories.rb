ActiveAdmin.register Category do
  permit_params :name

  index do
    selectable_column
    column :name
    column :created_at
    column :updated_at
    column :sub_categories do |category|
      category.sub_categories.count
    end
    actions
  end

  show do
    attributes_table :name, :created_at, :updated_at
    panel "Subcategories" do
      table_for category.sub_categories do
        column :name
      end
    end
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end
end
