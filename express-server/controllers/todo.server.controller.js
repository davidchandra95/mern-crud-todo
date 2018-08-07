import mongoose from 'mongoose'
import Todo from '../models/todo.server.model'
import { EDESTADDRREQ } from 'constants';

export const getTodos = (req, res) => {
   Todo.find().exec((err, todos) => {
      if (err) {
         return res.json({
            status: 'failed',
            message: 'Error on getting todos: ' + err.message
         })
      }

      return res.json({
         status: 'succcess',
         message: 'Success get todos',
         todos
      })
   })
}

export const addTodo = (req, res) => {
   const newTodo = new Todo(req.body)
   newTodo.save((err, todo) => {
      if (err) {
         return res.json({
            status: 'failed',
            message: 'Error on adding todo: ' + err.message
         })
      }

      return res.json({
         status: 'success',
         message: 'Success add todo',
         todo
      })
   })
}

export const updateTodo = (req, res) => {
   Todo.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true}, (err, todo) => {
      if (err) {
         return res.json({
            status: 'failed',
            message: 'Error on updating todo: ' + err.message
         })
      }

      return res.json({
         status: 'success',
         message: 'Success update todo',
         todo
      })
   })
}

export const getTodo = (req, res) => {
   Todo.find({ _id: req.params.id }).exec((err, todo) => {
      if (err) {
         return res.json({
            status: 'failed',
            message: 'Error on get todo: ' + err.message
         })
      }

      if (todo.length) {
         return res.json({
            status: 'success',
            message: 'Success get todo',
            todo
         })
      } else {
         return res.json({
            status: 'failed',
            message: 'Todo not found',
         })
      }
   })
}

export const deleteTodo = (req, res) => {
   Todo.FindByIdAndRemove(req.params.id, (err) => {
      if (err) {
         return res.json({
            status: 'failed',
            message: 'Error on deleting todo: ' + err.message
         })
      }

      return res.json({
         status: 'success',
         message: 'Success delete todo'
      })
   })
}