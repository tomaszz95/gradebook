import styles from './GradesView.module.css'
import GradesTable from './GradesTable'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SelectClass from './SelectClass'

const dummyStudentData = {
	'Semester 1': {
		German: {
			Pluses: [
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum asd sa das asd asdsad sadsa das dsad ',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Biology: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		IT: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		English: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Polish: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Mathematics: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		PE: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Chemistry: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		History: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Art: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Geography: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Physic: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
	'Semester 2': {
		German: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Biology: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '5-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '5',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		IT: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		English: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Polish: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Mathematics: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		PE: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '5+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Chemistry: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		History: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Art: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Geography: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		Physic: {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
}
const dummyTeacherData = {
	'Semester 1': {
		'Jan Kowalski': {
			Pluses: [
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum asd sa das asd asdsad sadsa das dsad ',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Jan Matejko': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Alina Janik': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michał Milowicz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Robert Lewandowski': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Adam Małysz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Sebastian Sztabka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Joanna Wózek': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Elwira Lwira': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Aneta Gazeta': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Piotr Patelka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michalina Agrest': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
	'Semester 2': {
		'Jan Kowalski': {
			Pluses: [
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum asd sa das asd asdsad sadsa das dsad ',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Jan Matejko': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Alina Janik': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michał Milowicz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Robert Lewandowski': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Adam Małysz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Sebastian Sztabka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Joanna Wózek': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Elwira Lwira': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Aneta Gazeta': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Piotr Patelka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michalina Agrest': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
}

const GradesView = () => {
	const [selectedValue, setSelectedValue] = useState('')
	const router = useRouter()
	const timetableArray = router.pathname.includes('student') ? dummyStudentData : dummyTeacherData

	const selectClassHandler = (selectedClass: string) => {
		setSelectedValue(selectedClass)
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>
				{router.pathname.includes('student') ? 'Check your grades!' : 'Check / add grade'}
			</h2>
			{router.pathname.includes('student') ? '' : <SelectClass onSelectClass={selectClassHandler} />}
			{router.pathname.includes('student') ? (
				''
			) : (
				<button onClick={() => router.push(`/teacher/grades/add-grade`)} className={styles.newButton}>
					Add grade
				</button>
			)}
			<GradesTable gradesData={timetableArray} />
		</div>
	)
}

export default GradesView
