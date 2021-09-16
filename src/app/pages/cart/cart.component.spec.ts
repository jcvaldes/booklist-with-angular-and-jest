import { CartComponent } from './cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from '../../services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('Cart component', () => {
  let component: CartComponent;
  // permite extraer información del componente, permite obtener servicios, detectar cambios
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // no hace una peticion real
        HttpClientTestingModule,
      ],
      declarations: [CartComponent],
      providers: [BookService],
      // agregarlos siempre en los test unitarios para prevenir errores en test unitarios
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    // instancia mi componente
    component = fixture.componentInstance;
    // inicializar el componente entra por ngOnInit
    fixture.detectChanges();
  });
  it('should be created', () => {
    // assert
    // el componente ha sido creado correctamente
    expect(component).toBeTruthy();
  })
});
