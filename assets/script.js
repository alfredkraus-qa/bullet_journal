// DOM - elementos necessários
document.addEventListener("DOMContentLoaded", () => {
    const tools = document.querySelectorAll(".tool")
    const canvasLeft = document.getElementById("canvas-left")
    const canvasRight = document.getElementById("canvas-right")
    const ctxLeft = canvasLeft.getContext("2d")
    const ctxRight = canvasRight.getContext("2d")
    const journal = document.getElementById("journal")
    let currentTool = "mouse"
    let drawing = false;

    // Configurações iniciais do canvas
    [canvasLeft, canvasRight].forEach(canvas => {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
    })

    // Atualiza a ferramenta ativa
    function setActiveTool(toolId) {
        tools.forEach(tool => tool.classList.remove("active"))
        document.body.style.cursor = "default"

        switch (toolId) {
            case "pen":
                document.body.style.cursor = "url('pen-cursor.png'), auto"
                break
            case "eraser":
                document.body.style.cursor = "url('eraser-cursor.png'), auto"
                break
            case "highlight":
                document.body.style.cursor = "url('highlight-cursor.png'), auto"
                break
            case "text":
                document.body.style.cursor = "text"
                break
        }

        document.getElementById(toolId).classList.add("active")
        currentTool = toolId
    }
    // Ferramenta padrão: Mouse
    setActiveTool("mouse")

    // Configurações para alternar ferramentas
    tools.forEach(tool => {
         tool.addEventListener("click", () => {
            setActiveTool(tool.id)
         })
    })
 
    // Ativando ferramentas para ambas as páginas
        enablePen(canvasLeft, ctxLeft)
        enableEraser(canvasLeft, ctxLeft)
        enableHighlighter(canvasLeft, ctxLeft)
        enableTextTool(canvasLeft)
    
        enablePen(canvasRight, ctxRight)
        enableEraser(canvasRight, ctxRight)
        enableHighlighter(canvasRight, ctxRight)
        enableTextTool(canvasRight)

    // Ferramenta: Lápis/Caneta
        function enablePen(canvas, ctx) {
            canvas.addEventListener("mousedown", startDrawing)
            canvas.addEventListener("mousemove", draw)
            canvas.addEventListener("mouseup", stopDrawing)

        function startDrawing(event) {
            if (currentTool !== "pen") return
            drawing = true
            ctx.beginPath()
            ctx.moveTo(event.offsetX, event.offsetY)
        }

        function draw(event) {
            if (!drawing || currentTool !== "pen") return
            ctx.lineTo(event.offsetX, event.offsetY)
            ctx.strokeStyle = "#000"
            ctx.lineWidth = 2
            ctx.stroke()
        }

        function stopDrawing() {
            drawing = false
            ctx.closePath()
        }
    }
    // Ferramenta: Borracha
        function enableEraser(canvas, ctx) {
            canvas.addEventListener("mousedown", startErasing)
            canvas.addEventListener("mousemove", erase)
            canvas.addEventListener("mouseup", stopErasing)

        function startErasing(event) {
            if (currentTool !== "eraser") return
            drawing = true
        }

        function erase(event) {
            if (!drawing || currentTool !== "eraser") return
            ctx.clearRect(event.offsetX - 15, event.offsetY - 15, 30, 30)
        }

        function stopErasing() {
            drawing = false
        }
    }
    // Ferramenta: Marca-texto
        function enableHighlighter(canvas, ctx) {
            canvas.addEventListener("mousedown", startHighlighting)
            canvas.addEventListener("mousemove", highlight)
            canvas.addEventListener("mouseup", stopHighlighting)

        function startHighlighting(event) {
            if (currentTool !== "highlight") return
            drawing = true
            ctx.globalCompositeOperation = "source-over"
            ctx.beginPath()
            ctx.moveTo(event.offsetX, event.offsetY)
        }

        function highlight(event) {
            if (!drawing || currentTool !== "highlight") return
            ctx.lineTo(event.offsetX, event.offsetY)
            ctx.strokeStyle = "rgba(0, 288, 0, 0.1)"
            ctx.lineWidth = 20
            ctx.stroke()
        }

        function stopHighlighting() {
            drawing = false
            ctx.closePath()
        }
    }
    // Ferramenta: Texto
        function enableTextTool(canvas) {
            canvas.addEventListener("click", addText)

        function addText(event) {
            if (currentTool !== "text") return

            const input = document.createElement("textarea")
            input.style.position = "absolute"
            input.style.left = `${event.pageX - journal.offsetLeft}px`
            input.style.top = `${event.pageY - journal.offsetTop}px`
            input.style.fontSize = "16px"
            input.style.background = "transparent"
            input.style.border = "none"
            input.style.outline = "none"
            input.style.resize = "none"
            input.style.color = "#000"
            input.style.zIndex = 10
            journal.appendChild(input)

            input.focus()

            input.addEventListener("blur", () => {
                const text = document.createElement("div")
                text.textContent = input.value
                text.style.position = "absolute"
                text.style.left = input.style.left
                text.style.top = input.style.top
                text.style.fontSize = input.style.fontSize
                text.style.color = "#000"
                text.style.cursor = "move"
                text.draggable = false;
                text.classList.add("movable-text")
                journal.appendChild(text)
                input.remove()
            })
        }
    }
 })