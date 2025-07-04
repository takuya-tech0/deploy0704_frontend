// Reactをインポートします
import React from 'react';

// NightPage という非同期関数（コンポーネント）を定義し、他ページで使用できるようにエクスポートします
// asyncは、関数内で await を使用できることを示します。
export default async function NightPage() {
  // 環境変数からAPI URLを取得
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

  // fetch 関数を使って指定した URL（FastAPI サーバー）にリクエストを送信します。
  // await は fetch の完了を待ち、結果を res に格納します
  const res = await fetch(`${apiUrl}/night`); 

  // await を使用して、テキストの取得が完了するまで待機します
  const data = await res.text();

  // 以下をレンダリングします
  return (
    <div>
      <h1>FastAPIからのレスポンス</h1>
      <p>{data}</p>
      <p><small>API URL: {apiUrl}</small></p>
    </div>
  );
}