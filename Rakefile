ROOT = File.expand_path File.dirname(__FILE__)

require 'jasmine'
require 'mustache'
require 'yui/compressor'

load 'jasmine/tasks/jasmine.rake'



class File
  def self.write file_path, contents
    File.open(file_path, 'w') { |f| f.write contents }
  end
end

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

def done message
  puts "#{ Time.now.strftime('%X') } - #{ message }"
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



desc 'Build the minified JS and HTML files into /dist'
task :build do
  js = File.read "#{ ROOT }/lib/symbol_matcher.js"
  minified_js = YUI::JavaScriptCompressor.new(:munge => true).compress js
  puts "\n"
  
  file_path = "#{ ROOT }/dist/symbol_matcher.js"
  File.write file_path, minified_js
  file_size  = File.size file_path
  precentage = file_size > 1024 ? 'OVER!' : "#{ (file_size / 1024.0 * 100).to_i }%"
  done "Built the minified JS file. ( #{ file_size } bytes | #{ precentage } )"
  
  rendered_template = Mustache.render @template, :the_script => minified_js
  File.write "#{ ROOT }/dist/index.html", rendered_template
  done "Built the HTML file." 
end

desc 'Automatically build when the files change'
task :'build:auto' do
  auto_task :build, 'lib/'
end