import { HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { MessageService } from './message.service';
import { Observable } from 'rxjs';




export class ErrorHandlingInterceptor implements HttpInterceptor {
    
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
        throw new Error("Method not implemented.");
    }
    
    constructor(private messageService: MessageService){

    }
    
    // intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
    //     // return next.handle(req).pipe(catchError(this.errorHandler));
    
    // }

    // errorHandler(error: HttpErrorResponse){
    //     this.messageService.error(`Blad polaczenia ${error.message}`);
    // }

}