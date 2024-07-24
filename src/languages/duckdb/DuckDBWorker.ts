import { worker } from '../../fillers/monaco-editor-core';
import { DuckDB } from '@volankey/dt-sql-parser/dist/parser/duckdb';
import { BaseSQLWorker, ICreateData } from '../../baseSQLWorker';

export class DuckDBWorker extends BaseSQLWorker {
	protected _ctx: worker.IWorkerContext;
	protected parser: DuckDB;
	constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
		super(ctx, createData);
		this._ctx = ctx;
		this.parser = new DuckDB();
	}
}

export function create(ctx: worker.IWorkerContext, createData: ICreateData): DuckDBWorker {
	return new DuckDBWorker(ctx, createData);
}
