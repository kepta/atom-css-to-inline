inline = (str) ->
    grid = str.split('\n')
    grid.forEach( (item) ->
      if validCssLine(item)

    )
    return grid.join('\n')

validCssLine = (item) ->
    if item.match(/:/g) || []).length == 1
        return true
    return false

cssToInline = (item) ->
    position = item.indexOf(':')
    left = item.slice(0,position)
    right = position !== item.length-1 ? item.slice(position+1) : ''
    processLeft(left)
    processRight(right)

processLeft = (item) ->
    temp = item.trim()
    # add a guard char
    temp = temp +'z'
    for 
module.exports = inline
