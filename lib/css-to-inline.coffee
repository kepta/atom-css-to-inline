{CompositeDisposable} = require 'atom'

module.exports =
  subscriptions: null

  activate: ->
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.commands.add 'atom-workspace',
      'css-to-inline:convert': => @convert()

  deactivate: ->
    @subscriptions.dispose()

  convert: ->
    if editor = atom.workspace.getActiveTextEditor()
        selection = editor.getSelectedText()
        if selection.length > 0
                converter = require('./inline.js')
                console.log(converter(selection))
                editor.insertText(converter(selection))
