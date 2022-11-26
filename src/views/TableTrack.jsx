import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';

function createData(
  timeTrackerName,
  taskTrackerName,
  tags,
  project,
  time,
  synced,
) {
  return {timeTrackerName, taskTrackerName, tags, project, time, synced};
}

const rows = [
  createData('#1: Создать реакт приложение', '#1: Создать проект', [{'id':1,'name':'test1', 'color':'primary'}, {'id':2, 'name':'test2', 'color':'success'}], 'timeTracker', '14:15', false),
  createData('#1: Проблемы с модулем', '#1: Создать проект', [{'id':1,'name':'test1', 'color':'primary'}, {'id':2, 'name':'test2', 'color':'success'}], 'timeTracker', '10:15', true),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Запись в тайм трекере:</TableCell>
            <TableCell align="center">Задача в таск трекере:</TableCell>
            <TableCell align="center">Тэги:</TableCell>
            <TableCell align="center">Проект:</TableCell>
            <TableCell align="center">Время:</TableCell>
            <TableCell align="center">Синхронизация:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.timeTrackerName}</TableCell>
              <TableCell align="center">{row.taskTrackerName}</TableCell>
              <TableCell align="center">{
                row.tags.map((tag) => {
                    return <div><Chip label={tag.name} color={tag.color} variant="filled" size="small"/></div>
                })
              }</TableCell>
              <TableCell align="center">{row.project}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center"><Button variant="outlined" disabled={row.synced}>{row.synced ? 'Синхронизировано' : 'Синхронизировать'}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}