module ApplicationHelper
  # NODE_SERVER = "http://temp-node-adam.herokuapp.com:80"
  NODE_SERVER = "http://adamrubin.no.de:80"

  def escape_for_document_write(text)
    (text || '').gsub(/\r\n|\n|\r/, "\\n").gsub(/["]/) { |m| "\\#{m}" }
  end

end