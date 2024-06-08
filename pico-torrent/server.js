const express = require("express");
const request = require("request");
const path = require("path");
const {
  print_item,
  make_search_url,
  print_date,
  print_category,
  print_username,
  print_size,
  print_magnet_button,
} = require("./helper");

const app = express();
const PORT = process.env.PORT || 3000;
// Set the view engine to EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", async (req, res) => {
  const q = req.query.q || "";
  const page = req.query.page || 1;
  const cat = req.query.cat || "";

  const url = `https://apibay.org/q.php?q=${q}&cat=${cat}&page=${page}`;
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const data = JSON.parse(body);
      res.render("search", {
        data,
        message: `Search results for: ${q}`,
        count: data.length,
        print_item,
        make_search_url,
        page: parseInt(page, 10),
        q,
        cat,
      });
    }
  });
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  let url = `https://apibay.org/t.php?id=${id}`;
  request(url, (error, response, body) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const description = JSON.parse(body);

      url = `https://apibay.org/f.php?id=${id}`;
      request(url, (error, response, body) => {
        if (error) {
          res.status(500).send(error);
        } else {
          const files = JSON.parse(body);
          res.render("details", {
            description,
            files,
            print_date,
            print_size,
            print_category,
            print_username,
            print_magnet_button,
          });
        }
      });
    }
  });
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
