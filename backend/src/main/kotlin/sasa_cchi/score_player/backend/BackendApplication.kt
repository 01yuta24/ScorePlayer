package sasa_cchi.score_player.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

// Spring Bootアプリケーションのメインクラス
// @SpringBootApplicationアノテーションでコンポーネントスキャンと自動設定が有効になる
@SpringBootApplication
class BackendApplication

// アプリケーションのエントリーポイント
// JVMがプログラム起動時に最初に呼び出す関数
// Spring Bootコンテキストを初期化してバックエンドサーバーを起動する
fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)
}
