Dir.glob("_deploy/**/*.html") do |fname|
  text = File.read(fname, encoding: 'utf-8')

  text.gsub!("« ", "«&nbsp;")
  text.gsub!(" »", "&nbsp;»")
  text.gsub!(" ?", "&nbsp;?")
  text.gsub!(" !", "&nbsp;!")
  text.gsub!(" :", "&nbsp;:")
  text.gsub!(" %", "&nbsp;%")

  File.write(fname, text)
end
