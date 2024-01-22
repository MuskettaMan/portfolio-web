<template>
<div v-if="data && data.length > 0" class="cms-table">
	<table>
		<thead>
		<tr class="header-row">
			<th v-for="(column, index) in columns" :key="index">{{ column.label }}</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>
		<tr v-for="(item, index) in data" :key="index" :class="getClass(item)">
			<td v-for="(column, colIndex) in columns" :key="colIndex">
				{{ getValue(column, item) }}
			</td>
			<td>
				<button @click="editItem(item)">Edit</button>
			</td>
		</tr>
		</tbody>
	</table>
</div>
</template>

<script>
export default {
	name: 'CMSTable',
	props: {
		columns: {
			type: Array,
			required: true,
		},
		data: {
			type: Array,
			required: true,
		},
		editCallback: {
			type: Function,
			required: true,
		},
	},
	setup(props) {
		const editItem = (item) => {
			props.editCallback(item);
		};

		const getValue = (column, item) => {
			if (column.func) {
				return column.func(item[column.key]);
			}
			return item[column.key];
		}

		const getClass = (item) => {
			return props.columns.reduce((acc, column) => {
				if (column.keyIsClass && item[column.key]) {
					acc.push(column.key);
				}
				return acc;
			}, []);
		}

		return {
			editItem,
			getValue,
			getClass
		}
	}
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.cms-table {
	margin: 20px;
}

table {
	width: 90%;
	border-collapse: collapse;
}

th, td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
	background-color: $ghost-white;
}

th {
	background-color: #f2f2f2;
}

tr:not(.is_published):not(.header-row) {
	td {
		background-color: lightgrey;
		border-color: white;
	}
}

button {
	font-weight: bold;
}
</style>