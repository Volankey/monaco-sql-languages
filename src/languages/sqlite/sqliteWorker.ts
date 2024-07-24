import { worker } from '../../fillers/monaco-editor-core';
import { SQLite } from '@volankey/dt-sql-parser/dist/parser/sqlite';
import { BaseSQLWorker, ICreateData } from '../../baseSQLWorker';

export class SQLiteWorker extends BaseSQLWorker {
	protected _ctx: worker.IWorkerContext;
	protected parser: SQLite;
	constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
		super(ctx, createData);
		this._ctx = ctx;
		this.parser = new SQLite();
	}
}

export function create(ctx: worker.IWorkerContext, createData: ICreateData): SQLiteWorker {
	return new SQLiteWorker(ctx, createData);
}
