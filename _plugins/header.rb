module Jekyll
  class RenderTimeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      text = "#{@text} - #{context.registers[:site].config['title']}"
      url = "#{context.registers[:site].config['url']}" +
        context.registers[:page]['permalink'] +
        '%23' + slugify(@text)
      # TODO: place an anchor somewhere beside the h2
      "## #{@text} "
    end

    def slugify(string)
      string.strip.downcase
        .gsub(':', '')
        .gsub('?', '')
        .gsub('«', '')
        .gsub('»', '')
        .gsub("'", '')
        .gsub('⋅', '')
        .gsub(',', '')
        .gsub('’', '')
        .gsub('*', '')
        .gsub(' ', '-')
    end
  end
end

Liquid::Template.register_tag('header', Jekyll::RenderTimeTag)
