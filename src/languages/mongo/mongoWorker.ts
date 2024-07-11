import { worker } from '../../fillers/monaco-editor-core';
import { Mongo } from 'dt-sql-parser/dist/parser/mongo';
import { BaseSQLWorker, ICreateData } from '../../baseSQLWorker';

export class MongoWorker extends BaseSQLWorker {
	protected _ctx: worker.IWorkerContext;
	// @ts-ignore
	protected parser: Mongo;
	constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
		super(ctx, createData);
		this._ctx = ctx;
		this.parser = new Mongo();
	}
}

export function create(ctx: worker.IWorkerContext, createData: ICreateData): MongoWorker {
	return new MongoWorker(ctx, createData);
}
