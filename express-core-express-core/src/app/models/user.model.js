const sql = require('../../libs/database/connect.mysql');

const postModelUser = (res, data) => {
  let query = `INSERT INTO Users SET?`;
  const newTasks = {
    content: data.content,
    dueDate: data.dueDate,
    status: data.status,
    userName: data.userName,
  };
  console.log('data nè ===>', newTasks);
  sql.query(query, newTasks, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      status: 'Thêm được rồi đó con chó',
      data: results,
    });
  });
};

const getModelUser = (req, res) => {
  let query = `SELECT * FROM Users`;
  sql.query(query, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      data: results,
    });
  });
};

const getModelUserId = (res, id) => {
  let query = `SELECT * FROM Users WHERE id = ?`;
  sql.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      data: result,
    });
  });
};

const putModelUser = (res, id, data) => {
  let query = `UPDATE Users SET content = ?, dueDate = ?, status = ?, userName = ? WHERE id = ?`;
  const updateTask = [data.content, data.dueDate, Number(data.status), data.userName, Number(id)];
  sql.query(query, updateTask, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      status: 'Cập nhật thành công',
      data: result,
    });
  });
};

const deleteModelUser = (res, id) => {
  let query = `DELETE FROM Users WHERE id = ?`;
  sql.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      status: 'Cập nhật thành công',
      data: result,
    });
  });
};

module.exports = {
  postModelUser,
  getModelUser,
  getModelUserId,
  putModelUser,
  deleteModelUser,
};
