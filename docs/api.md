# API仕様

## POST /api/sensors
説明：センサーからのデータを送信・保存する

リクエスト：
{
  "id": "1",
  "location": "nagoya",
  "water_level": 3.5
}

レスポンス：
{
  "id": "1",
  "location": "nagoya",
  "water_level": 3.5
}

## GET /api/sensors
説明：サーバーに保存されたセンサーデータ一覧を取得する

レスポンス：
[
  {
    "id": "1",
    "location": "nagoya",
    "water_level": 3.5
  }
]

## POST /api/risk-level
説明：地域の危険度データを送信・保存する

リクエスト：
{
  "source": "気象庁API",
  "type": "大雨警報"
}

レスポンス：
{
  "source": "気象庁API",
  "type": "大雨警報"
}

## GET /api/risk-level
説明：サーバーに保存された地域の危険度データ一覧を取得する

レスポンス：
[
  {
    "source": "気象庁API",
    "type": "大雨警報"
  }
]