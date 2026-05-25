//require('dotenv').config();
const express = require('express');
//const { Pool } = require('pg');

const app = express();
app.use(express.json());
app.use(express.static('public'));

//const pool = new Pool({
  //host:     process.env.DB_HOST,
  //port:     process.env.DB_PORT,
  //database: process.env.DB_NAME,
  //user:     process.env.DB_USER,
  //password: process.env.DB_PASSWORD,
//});

// ルート1：トップページ
app.get('/', (req, res) => {
  res.send('トップページです');
});

// ルート2：自己紹介ページ
app.get('/about', (req, res) => {
  res.send('自己紹介ページです');
});

// ルート3：現在時刻を返す
app.get('/time', (req, res) => {
  const now = new Date().toLocaleString('ja-JP');
  res.send('現在時刻：' + now);
});

app.get("/api/test", (req, res) => {
  res.json({ message: "APIが動いています", status: "ok" });
});

app.get('/status', (req, res) => {
res.json({ status: 'ok',message: 'サーバーが動いています'});
});

//const messages = [];
//ここは今回は関係ないので無効化
// GET：メッセージ一覧を取得
//app.get("/api/messages", async (req, res) => {
  //const result = await pool.query(
    //'SELECT * FROM messages ORDER BY created_at ASC'
  //);
  //res.json(result.rows);
//});

// POST：メッセージを追加
//今回は使わないので無効化
//app.post("/api/messages", async (req, res) => {
  //const { username, text } = req.body;
  //const result = await pool.query(
    //'INSERT INTO messages (username, text) VALUES ($1, $2) RETURNING *',
    //[username, text]
  //);
  //res.json(result.rows[0]);
//});

//ここから5-A

const sensorDataList = [];
const riskDataList = [];

app.post('/api/sensors', (req, res) => {
  const { id, location, water_level } = req.body;
  const newSensorData = { id, location, water_level };
  
  sensorDataList.push(newSensorData); // 配列に保存！

  console.log("=== センサーデータを受信しました ===");
  console.log(newSensorData);
  res.json(newSensorData);
});

app.get('/api/sensors', (req, res) => {
  res.json(sensorDataList); 
});



app.post('/api/risk-level', (req, res) => {
  const { source, type } = req.body;
  const newRiskData = { source, type };
  
  riskDataList.push(newRiskData); // 配列に保存！

  console.log("=== 危険度データを受信しました ===");
  console.log(newRiskData);
  res.json(newRiskData);
});

app.get('/api/risk-level', (req, res) => {
  res.json(riskDataList); 
});

app.listen(3000, () => {
  console.log("サーバーが起動しました: http://localhost:3000");
});

