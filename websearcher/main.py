import sys
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import *

class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()

        self.showMaximized()



app = QApplication(sys.argv)
QApplication.setApplicationName('Web Search')
window = MainWindow()
app.exec_()