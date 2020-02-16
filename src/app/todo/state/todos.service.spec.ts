import { TestBed, inject } from "@angular/core/testing";
import { TodosService } from "./todos.service";
import { TodosStore } from "./todos.store";
import { createTodoModel, TodoModel } from "../models/todo.model";
import { Store } from "@datorama/akita";

describe("TodosService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService],
      imports: [Store]
    });

    // const storeMock = spyOn(Store, "update");
  });

  it("created", inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));

  it("add", inject([TodosService], (service: TodosService) => {
    const fixture = TestBed.createComponent(TodosService);
    const mockStore = fixture.debugElement.injector.get(Store);
    // const createTodoMock = jasmine.createSpyObj(createTodoModel, ["return"]);
    const createTodoMock = (label: string): TodoModel => {
      return {
        label,
        important: false,
        done: false,
        id: 1
      };
    };
    service.add("5");
    // expect(createTodoMock).toHaveBeenCalled();
    expect(mockStore.update).toHaveBeenCalled();
  }));
});

// 2) mock createTodo func;
// 3) mock Store;
// 4) check add func;
// 5) check delete func;
// 6) check toggle func;
