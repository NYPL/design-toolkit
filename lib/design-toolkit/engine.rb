# inspired by bootstrap-sass
module Toolkit
  module Rails
    class Engine < ::Rails::Engine
      initializer 'design-toolkit.assets.precompile' do |app|
        %w(sass).each do |sub|
          app.config.assets.paths << root.join('', sub).to_s
        end
      end
    end
  end
end