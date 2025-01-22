const express = require('express'); 
const convert = require('./convert'); 
const app = express(); 
app.use(express.json()); 
app.get('/convert', (req, res) => { 
    const { inr } = req.query; 
    if (!inr) { 
        return res.status(400).json({ error: 'Missing required query parameters' }); 
}; 
    try { 
        const usd = convert(inr); 
        res.json({ inr, usd}); 
    } catch (e) { 
        res.status(500).json({ error: e }); 
    }
 } );
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 