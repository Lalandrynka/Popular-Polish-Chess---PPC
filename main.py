import webview
webview.create_window(
            'Popular Polish Chess',
            'index.html',
            width = 1000,
            height = 900, 
            resizable = None,
            easy_drag=True, 
            background_color = '#04D39F'
            )
webview.start()