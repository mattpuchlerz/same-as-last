ROOT = File.expand_path File.dirname(__FILE__)

require 'jasmine'
require 'mustache'

load 'jasmine/tasks/jasmine.rake'



def auto_task task, paths
  begin
    require 'bind'
  rescue LoadError
    puts "\n\n`gem install bind` to run tasks automatically"
  else
    puts "\n"
    system "rake #{ task }"
    puts "\n"
    # puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    # puts "\n"
    puts "Waiting for your changes..."
    puts "Ctrl+C to exit"
    puts "\n"
    system %| rbind to #{ paths } -e 'system "rake #{ task }" ; puts "\n"' |
  end
end



@template = <<-HTML
<!doctype html>
<html>
	<head>
		<title>JS1k, 1k demo submission [id]</title>
		<meta charset="utf-8" />
	</head>
	<body>
		<canvas id="c"></canvas>
		<script>
			{{{ the_script }}} 
		</script>
	</body>
</html>
HTML



desc 'Build the minified JS and HTML files into ./dist'
task :build do
  js = File.read "#{ ROOT }/lib/symbol_matcher.js"
  puts "\n"
  
  minified_js = js
  file_path = "#{ ROOT }/dist/symbol_matcher.js"
  File.open(file_path, 'w') { |f| f.write minified_js }
  puts "- Built the minified JS file. (#{ File.size file_path } bytes)"
  
  rendered_template = Mustache.render @template, :the_script => minified_js
  file_path = "#{ ROOT }/dist/index.html"
  File.open(file_path, 'w') { |f| f.write rendered_template }
  puts "- Built the HTML file." 
end

desc 'Automatically build when the files change'
task :'build:auto' do
  auto_task :build, 'lib/'
end