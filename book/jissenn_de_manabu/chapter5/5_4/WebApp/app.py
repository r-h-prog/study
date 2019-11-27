import os

from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug import secure_filename

UPLOAD_FOLDER = './static/images/upload'
# アップロードを許可する拡張子の設定
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

# appという名前でFlaskオブジェクトをインスタンス化
app = Flask(__name__)
# flashメッセージ用に任意のキーを設定
app.secret_key = 'flash_key'

# アップロードされたファイルの拡張子チェック
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# rootディレクトリにアクセスした場合の挙動
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('ファイルを選択してください')
            return render_template('index.html')
        file = request.files['file']
        if not allowed_file(file.filename):
            flash('拡張子はpng, jpg, jpegのみ使用可能です')
            return render_template('index.html')
        else:
            filename = secure_filename

# メインで実行される関数
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
