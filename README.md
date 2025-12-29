# ScorePlayer

楽譜を作って音楽を再生するアプリです

## このアプリを始める前に
個人開発スペースなので、gitのSSHを切り替える必要があります。

git@github.com->デフォルトのSSHキー  
git@github-personal->個人開発用のSSHキー  
で切り替えます。

git remote -vでhost名を確認してください。
``` text
git remote -v
```
``` text
origin  https://github.com/{your_gitName}/ScorePlayer.git (fetch)
origin  https://github.com/{your_gitName}/ScorePlayer.git (push)
```
もしhost名がgithub.comであれば、以下のコマンドでSSHに切り替えてください。
``` text
git remote set-url origin git@github-personal:{your_gitName}/ScorePlayer.git
```
もう一度git remote -vでhost名を確認してください。  
``` text
git remote -v
```
``` text
origin  git@github-personal:{your_gitName}/ScorePlayer.git (fetch)
origin  git@github-personal:{your_gitName}/ScorePlayer.git (push)
```
2025 12/29更新