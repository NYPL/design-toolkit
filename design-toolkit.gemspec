lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'design-toolkit/version'

Gem::Specification.new do |s|
  s.name        = 'design-toolkit'
  s.version     = Toolkit::VERSION
  s.date        = '2017-06-02'
  s.summary     = "NYPL Design Toolkit"
  s.description = "Design toolkit (CSS/SASS) for the NYPL Digital team"
  s.authors     = ["Mauricio Giraldo Arteaga"]
  s.email       = 'mauriciogiraldo@nypl.org'
  s.files       = `git ls-files`.split("\n")
  s.homepage    = 'https://github.com/NYPL/design-toolkit/'
  s.license     = 'MIT'

  s.add_runtime_dependency 'sass', '~> 3.3', '>= 3.3.4'
end
