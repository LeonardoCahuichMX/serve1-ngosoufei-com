# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "ngosoufeicom"
  spec.version       = "0.1.0"
  spec.authors       = ["LeonardoCahuichLopez"]
  spec.email         = ["leonardo.cahuich@icloud.com"]

  spec.summary       = "TODO: Write a short summary, because Rubygems requires one."
  spec.homepage      = "TODO: Put your gem's website or public repo URL here."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

#  spec.platform = Gem::Platform::RUBY
#  spec.add_runtime_dependency "jekyll", "> 3.1", "< 5.0"
 # spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
 # spec.add_development_dependency "html-proofer", "~> 3.0"
 # spec.add_development_dependency "rubocop-github", "~> 0.16"
 # spec.add_development_dependency "w3c_validators", "~> 1.3"
end
